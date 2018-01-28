// 下载 qq music

var music_link = document.createElement("a")
var music_href = $('#h5audio_media').attr('src')
var music_name = $('.js_song').attr('title')
music_link.href = music_href
music_link.text = music_name
music_link.download = music_name

$('.mod_player').append(music_link)
music_link.remove
