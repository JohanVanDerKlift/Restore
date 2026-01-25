using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole
                {
                    Id = "58d6ac56-63e2-4f5a-b244-d8c9a3b13f5b", 
                    ConcurrencyStamp = "Member", 
                    Name = "Member", 
                    NormalizedName = "MEMBER"
                },
                new IdentityRole
                {
                    Id = "cdbd4c86-e57f-4b86-9be9-25a878f0adb3", 
                    ConcurrencyStamp = "Admin", 
                    Name = "Admin", 
                    NormalizedName = "ADMIN"
                }
            );
    }
}