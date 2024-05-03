import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import api from '@/lib/api/WebinarWiseApi'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 4 * 60 * 60,
  },
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
        if (!credentials) return null
        const { email, password } = credentials
        const response = await api
          .login(email, password)
          .catch((error) => error)
        if (response.status === 200) {
          const userInfo = await api.getUserInfo(response.data)
          return userInfo
        } else if (response.status === 401) {
          return null
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
