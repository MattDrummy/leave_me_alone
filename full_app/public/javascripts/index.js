$.get('/api/v1/quotes').then(data => {
  $("#postIt").click(event => {
    event.preventDefault();
    randomQuote = data[Math.floor(Math.random() * data.length)].quote
    days = $('#days').val();
    window.location.replace("https://www.facebook.com/sharer.php?u=123.abc.com&quote=" + randomQuote + "please%20leave%20me%20alone%20for%20" + days + (days < 2 ? " day" : " days"));
  })
  $("#submitIt").click(event => {
    event.preventDefault();
    let data = {
      quote: $("#theQuote").val()
    }
    $.post('/api/v1/quotes', data).then(data => {
      if (data.error) {
        console.log(error);
      }

      window.location.reload(true)
      alert(`added new comment`)
    })
  })
})
