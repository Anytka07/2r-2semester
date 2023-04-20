using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Razor_Pages.Models;

namespace Razor_Pages.Data
{
    public class Razor_PagesContext : DbContext
    {
        public Razor_PagesContext (DbContextOptions<Razor_PagesContext> options)
            : base(options)
        {
        }

        public DbSet<Razor_Pages.Models.Movie> Movie { get; set; } = default!;
    }
}
