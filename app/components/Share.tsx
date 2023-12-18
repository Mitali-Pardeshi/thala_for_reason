import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  import { Share, Share2 } from "lucide-react";

const ShareComp = () => {
  return (
    <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="flex justify-center items-center gap-x-2 cursor-pointer">Share <Share2 className="w-4 h-4"/></MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Whatsapp</MenubarItem>
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Copy link</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
  )
}

export default ShareComp