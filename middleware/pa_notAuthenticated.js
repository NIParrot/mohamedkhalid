export default function({ $storage, redirect }) {
    // If the user is authenticated redirect to home page
    if (process.browser) {
      if (sessionStorage.getItem("auth")) {
        return redirect('/patient/reports')
      }
    }

}
