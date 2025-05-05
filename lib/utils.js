<<<<<<< HEAD

=======
>>>>>>> c2b0aceae100214113170e61672e1038f9676667
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

module.exports = { cn };
