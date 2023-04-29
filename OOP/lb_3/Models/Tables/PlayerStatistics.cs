using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class PlayerStatistics
    {
        [Key]
        public Guid GameId { get; set; }
        public Games Game { get; set; } = default!;
        [Key]
        public Guid PlayerId { get; set; }
        public Players Player { get; set; } = default!;

        [Required]
        public int ScoredGoals { get; set; }
        [Required]
        public bool Assists { get; set; }
        [Required]
        public decimal MinutesPlayed { get; set; }
    }
}
