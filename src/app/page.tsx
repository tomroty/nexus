import ModeToggle from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button>
            Sign in
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button variant={'secondary'}>
            Sign up
          </Button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>


      <ModeToggle />
    </div>
  )
}

export default Home