using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Players
    {
        [Key]
        public Guid PlayerId { get; set; }
        [Required]
        public string Name { get; set; } = default!;
        [Required]
        public int SquadNumber { get; set; }
        [Required]
        public bool IsInjured { get; set; }


        public Guid TeamId { get; set; }
        public Teams Team { get; set; } = default!;
        public Guid PositionId { get; set; }
        public Positions Position { get; set; } = default!;

        public ICollection<PlayerStatistics> PlayerStatistics { get; set; } = default!;
    }
}
