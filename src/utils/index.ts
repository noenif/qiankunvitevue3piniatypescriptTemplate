export const queryUrlParams = (key: string): string | undefined => {
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + key + '=' + '([^&;]+?)(&|#|;|$)').exec(
        location.href,
      ) || ['', ''])[1].replace(/\+/g, '%20'),
    ) || undefined
  )
}
