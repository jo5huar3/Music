using System.CodeDom;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Music.Models;

public class ApplicationUser : IdentityUser
{
    [MaxLength(70)]
    public override string? UserName { get; set; }
    [MaxLength(70)]
    public override string? NormalizedUserName { get; set; }
    [MaxLength(70)]
    public override string? Email { get; set; }
    [MaxLength(70)]
    public override string? NormalizedEmail { get; set; }
    [MaxLength(15)]
    public override string? PhoneNumber { get; set; }
    [MaxLength(50)]
    public string? FirstName { get; set; }
    [MaxLength(50)]
    public string? LastName { get; set; }
}