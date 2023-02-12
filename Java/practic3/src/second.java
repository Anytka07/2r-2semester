import java.util.Scanner;

public class second {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter Fist int: ");
        int first = scan.nextInt();
        System.out.print("Enter Second int: ");
        int second = scan.nextInt();

        double[] rez = calculate(first, second);
        System.out.println("rez:" + "\nfirst : " +  rez[0] + "\nsecond : " + rez[1]);
    }

    public static double[] calculate(int x, int y) {
        double hyp = Math.hypot(x, y);
        //Math.hypot(a,b) для розрахунку гіпотенузи (а та b - катети),
        //Math.asin (с) – повертає арксинус кута с у радіанах
        double rad1 = x/hyp;
        double rad2 = y/hyp;
        //Math.toDegrees (с) – повертає значення с-радіан у градуси
        double[] rez = {Math.toDegrees(rad1), Math.toDegrees(rad2)};
        return rez;
    }
}
