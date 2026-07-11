"use server"

type State = {
  success: boolean
  message: string
}

export async function subscribe(
  _prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const email = formData.get("email")

    if (!email) {
      throw new Error("Email is Required")
    }

    console.info("[Newsletter] Subscription received (concept mode)", { email })

    return {
      success: true,
      message: "Successfully subscribed to the newsletter!"
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unexpected error occurred"
    }
  }
}
