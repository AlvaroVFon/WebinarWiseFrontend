import CredentialsProvider from 'next-auth/providers/credentials'
import api from '@/lib/api/WebinarWiseApi'
const NextAuthOptions = {
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
        if (!credentials) return null
        const { email, password } = credentials
        const token = await api
          .login(email, password)
          .then((res) => res.data.token)

        if (token) {
          const user = await api.getUserInfo(token).then((res) => res.data)
          return {
            userId: user.id,
            name: user.name,
            email: user.email,
            roleName: user.role,
            accessToken: token,
          }
        }
        return new Error('Invalid credentials')
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        ;(token.name = user.name),
          (token.email = user.email),
          (token.userId = user.userId),
          (token.roleName = user.roleName),
          (token.accessToken = user.accessToken)
      }
      return token
    },
    async session({ session, token }) {
      session = {
        ...session,
        user: {
          name: token?.name,
          email: token?.email,
          id: token?.userId,
          roleName: token?.roleName,
          accessToken: token.accessToken,
        },
      }
      return session
    },
  },
}

export default NextAuthOptions
