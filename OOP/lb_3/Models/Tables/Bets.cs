
using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Bets
    {
        [Key]
        public Guid BetId { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]

        public DateTime DateTime { get; set; }


        public Guid GameId { get; set; }
        public Games Game { get; set; } = default!;
        public Guid UserId { get; set; }
        public Users User { get; set; } = default!;
    }
}
