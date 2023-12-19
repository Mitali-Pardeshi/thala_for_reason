import {Github} from "lucide-react";
import ShareComp from "./Share";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full items-center justify-end flex p-6 gap-x-3">
      <Link href={'https://github.com/rishi-boi/thala_for_reason'}><Button size={'icon'} variant={'outline'}><Github/></Button></Link>
      <ShareComp website='thala-for-reason.vercel.app'/>
    </div>
  );
};

export default Navbar;
