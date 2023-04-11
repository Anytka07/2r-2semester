using hospital.Data;

namespace hospital
{
    public class StartUp
    {
        public static void Main()
        {
            using (HospitalContext context = new HospitalContext())
            {
                context.Database.EnsureCreated();
            }
        }
    }
}
