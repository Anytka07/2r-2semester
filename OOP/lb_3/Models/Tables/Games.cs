
using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Games
    {
        [Key]
        public Guid GameId { get; set; }
        [Required]
        public int HomeTeamGoals { get; set; }
        [Required]
        public int AwayTeamGoals { get; set; }
        [Required]
        public DateTime DateTime { get; set; }
        [Required]
        public decimal HomeTeamBetRate { get; set; }
        [Required]
        public decimal AwayTeamBetRate { get; set; }
        [Required]
        public decimal DrawBetRate { get; set; }
        [Required]


        public Guid HomeTeamId { get; set; } // FK
        public Teams HomeTeam { get; set; } = default!;
        public Guid AwayTeamId { get; set; } // FK
        public Teams AwayTeam { get; set; } = default!;

        public ICollection<Bets> Bets { get; set; } = default!;
        public ICollection<PlayerStatistics> PlayerStatistics { get; set; } = default!;
    }
}
