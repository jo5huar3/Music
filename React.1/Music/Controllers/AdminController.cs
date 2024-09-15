using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Music.Controllers;

[Authorize]
[ApiController]
[Route("[controller]/[action]")]
public class AdminController : ControllerBase
{
    private readonly RoleManager<IdentityRole> _roleManager;
    public AdminController(RoleManager<IdentityRole> roleManager)
    {
        _roleManager = roleManager;
    }

    public IActionResult Fetch()
    {   
        Console.WriteLine("GET request");
        IdentityRole[] roles = _roleManager.Roles.ToArray();
        if (roles.Length == 0){
            return Ok( new[] { new IdentityRole("No Roles Exists.")});
        }
        return Ok(_roleManager.Roles.ToList());    
    }
}