import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import api from '@/lib/api/WebinarWiseApi'

const handler = NextAuth({
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 4 * 60 * 60,
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  url: process.env.NEXT_PUBLIC_AUTH_URL,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'email@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials) return { error: 'Invalid credentials' }
        const { email, password } = credentials
        console.log(credentials)
        const response = await api
          .login(email, password)
          .catch((error) => error)
        if (response) {
          const userInfo = await api.getUserInfo(response.data.token)

          return {
            id: userInfo.data.id,
            name: userInfo.data.name,
            email: userInfo.data.email,
            profile_pic: userInfo.data.profile_pic,
            role: userInfo.data.role,
            token: response.data.token,
          }
        }
        return new Error('Invalid credentials')
      },
    }),
  ],
  callbacks: {},
})

export { handler as GET, handler as POST }
