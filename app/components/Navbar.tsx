import {Github} from "lucide-react";
import ShareComp from "./Share";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full items-center justify-end flex p-6 gap-x-3">
      <Link href={''}><Button size={'icon'} variant={'outline'}><Github/></Button></Link>
      <ShareComp/>
    </div>
  );
};

export default Navbar;
