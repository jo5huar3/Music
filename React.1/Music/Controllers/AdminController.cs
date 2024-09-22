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

[HttpPost]
public async Task<IActionResult> MyPst([FromBody] string rolename)
{
    Console.WriteLine("FirstPost request: " + rolename);
    
    // Find the role by name
    var role = await _roleManager.FindByNameAsync(rolename);
    if (role == null)
    {
        return NotFound($"Role '{rolename}' not found.");
    }
    // Delete the role
    var result = await _roleManager.DeleteAsync(role);
    
    if (result.Succeeded)
    {
        return Ok($"Role '{rolename}' deleted successfully.");
    }
    return BadRequest("Failed to delete the role.");
}
[HttpPost]
public async Task<IActionResult> DeleteRole([FromBody] string rolename)
{
    Console.WriteLine("DeleteRole request: " + rolename);
    
    // Find the role by name
    var role = await _roleManager.FindByNameAsync(rolename);
    if (role == null)
    {
        return NotFound($"Role '{rolename}' not found.");
    }
    // Delete the role
    var result = await _roleManager.DeleteAsync(role);
    if (result.Succeeded)
    {
        return Ok($"Role '{rolename}' deleted successfully.");
    }
    return BadRequest("Failed to delete the role.");
}
    [HttpPost]
    public async Task<IActionResult> AddRole([FromBody] string rolename)
    {
        Console.WriteLine("AddRole request");
        if (!await _roleManager.RoleExistsAsync(rolename))
        {
            // Step 3: Create the new role
            IdentityResult result = await _roleManager.CreateAsync(new IdentityRole(rolename));

            // Step 4: Check if the role was successfully created
            if (result.Succeeded)
            {
                return Ok();
            }
        }
        return BadRequest($"Role '{rolename}' already exists.");
    }

    [HttpGet]
    public IActionResult Fetch()
    {
        Console.WriteLine("GET request");
        IdentityRole[] roles = _roleManager.Roles.ToArray();
        if (roles.Length == 0)
        {
            return Ok(new[] { new IdentityRole("No Roles Exists.") });
        }
        return Ok(_roleManager.Roles.ToList());
    }
}