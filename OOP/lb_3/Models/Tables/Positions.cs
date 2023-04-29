using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Positions
    {
        [Key]
        public Guid PositionId { get; set; }
        [Required]
        public string Name { get; set; } = default!;


        public ICollection<Players> Players { get; set; } = default!;
    }
}
