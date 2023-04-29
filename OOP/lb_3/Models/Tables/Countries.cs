using System.ComponentModel.DataAnnotations;

namespace Models.Tables
{
    public class Countries
    {
        [Key]
        public Guid CountryId { get; set; }
        [Required]
        public string Name { get; set; } = default!;


        public ICollection<Towns> Towns { get; set; } = default!;
    }
}
