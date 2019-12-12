$(document).ready(mainCode)


function mainCode() {
  $('').click(closeImages)
  $('').click(OpenImages)

  function closeImages() {
      $('.resize').removeClass('resize')
  }
  function OpenImages() {
      $('.resize').addClass('resize')
  }
}