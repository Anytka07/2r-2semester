using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Users
    {
        [Key]
        public Guid UserId { get; set; }
        [Required]
        public string UserName { get; set; } = default!;
        [Required]
        public string Password { get; set; } = default!;
        [Required]
        public string Email { get; set; } = default!;
        [Required]
        public string Name { get; set; } = default!;
        [Required]
        public decimal Balance { get; set; }


        public ICollection<Bets> Bets { get; set; } = default!;
    }
}