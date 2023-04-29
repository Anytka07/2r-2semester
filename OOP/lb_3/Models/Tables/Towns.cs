using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Towns
    {
        [Key]
        public Guid TownId { get; set; }
        [Required]
        public string Name { get; set; } = default!;


        public Guid CountryId { get; set; }
        public Countries Country { get; set; } = default!;

        public ICollection<Teams> Teams { get; set; } = default!;
    }
}
