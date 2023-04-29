
using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Teams
    {
        [Key]
        public Guid TeamId { get; set; }
        [Required]
        public string Name { get; set; } = default!;
        [Required]
        public string LogoUrl { get; set; } = default!;
        [Required]

        public decimal Budget { get; set; }


        public Guid PrimaryKitColorId { get; set; }
        public Colors PrimaryKitColor { get; set; } = default!;
        public Guid SecondaryKitColorId { get; set; }
        public Colors SecondaryKitColor { get; set; } = default!;
        public Guid TownId { get; set; }
        public Towns Town { get; set; } = default!;

        public ICollection<Players> Players { get; set; } = default!;
        public ICollection<Games> Games_HomeTeam { get; set; } = default!;
        public ICollection<Games> Games_AwayTeam { get; set; } = default!;
    }
}
