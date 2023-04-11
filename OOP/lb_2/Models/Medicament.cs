using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace hospital.Data.Models
{
    [Table("Medicaments")]
    public class Medicament
    {
        public Medicament()
        {

        }
        public Medicament(string name)
        {
            this.Name = name;
            this.Prescriptions = new HashSet<PatientMedicament>();
        }

        [Key]
        public int MedicamentId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        //öå éäå ÿê â³ä PRIMARY òàáëèö³
        public virtual ICollection<PatientMedicament> Prescriptions { get; set; }

    }
}