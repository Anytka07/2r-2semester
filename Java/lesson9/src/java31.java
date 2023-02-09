import java.util.Scanner;

public class java31 {
    public static void main(String[] args) {
        System.out.println("Enter int");
        Scanner scan = new Scanner(System.in);
        int b = Integer.parseInt(scan.nextLine());
        symbol_rand(b);
    }

    public static void symbol_rand(int x) {
        for (int i = 0; i < x; i++) {
            char c = (char) (Math.random() * 26 + 'a');
            System.out.print(c + ": ");
            switch (c) {
                case 'a','e','i','o','u':
                    System.out.println("голосна"); break;
                case 'y':
                case 'w':
                    System.out.println("інколи голосна");
                    break;
                default:
                    System.out.println("приголосна");
            }
        }
    }
}
