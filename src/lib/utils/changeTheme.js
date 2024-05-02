function changeTheme() {
  const body = document.querySelector('body')
  body.classList.contains('light')
    ? body.classList.replace('light', 'dark')
    : body.classList.replace('dark', 'light')
}

export { changeTheme }
