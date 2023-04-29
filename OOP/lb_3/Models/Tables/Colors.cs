using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Colors
    {
        [Key]
        public Guid ColorId { get; set; }
        [Required]
        public string Name { get; set; } = default!;


        public ICollection<Teams> Teams_PrimaryKitColor { get; set; } = default!;
        public ICollection<Teams> Teams_SecondaryKitColor { get; set; } = default!;
    }
}
