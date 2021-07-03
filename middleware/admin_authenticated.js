export default function({ redirect, $storage }) {
    // If the user is not authenticated
    if (process.browser) {
      if (sessionStorage.getItem("auth") == null) {
          return redirect('/dashboard')
      }
    }
}
