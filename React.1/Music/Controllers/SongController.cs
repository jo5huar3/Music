using Microsoft.AspNetCore.Mvc;
using Music.Models;

namespace Music.Controllers;

[ApiController]
[Route("[controller]")]
public class SongController : ControllerBase
{
    private static readonly IEnumerable<Song> Songs = new[]
    {
        new Song {Id =1, Name ="Don't Stop 'Till You Get Enough"},
        new Song {Id =2, Name ="Every Day"},
        new Song {Id =3, Name ="Forever and Always"},
        new Song {Id =4, Name ="Don't Stop 'Till You Get Enough Remix"}
    };
    [HttpGet]
    public Song[] Get()
    {
        //return Ok(Songs.ToList());
        return Songs.ToArray();
    }
    [HttpGet("{id:int}")]
    public IActionResult Get(int id)
    {
        Song[] _Songs = Songs.Where(i => i.Id == id).ToArray();
        return Ok(_Songs);
    }
}