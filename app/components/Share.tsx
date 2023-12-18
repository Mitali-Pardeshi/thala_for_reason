import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const ShareComp = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Share</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem asChild>
                <Link target="_blank" href='https://web.whatsapp.com/send?text=https://thala-for-reason.vercel.app/'>Whatsapp</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link target="_blank" href='https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20website%20on%20trending%20meme.%0Ahttps%3A//thala-for-reason.vercel.app/'>Twitter</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href='https://www.facebook.com/sharer/sharer.php?u=Check%20out%20this%20cool%20website%20on%20trending%20meme.%20https%3A//thala-for-reason.vercel.app/'>Facebook</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href='https://www.linkedin.com/shareArticle?mini=true&url=Check%20out%20this%20cool%20website%20on%20trending%20meme.%20https%3A//thala-for-reason.vercel.app/'>LinkedIn</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href='https://t.me/share/url?url=https%3A//thala-for-reason.vercel.app/&text=Check%20out%20this%20cool%20website%20on%20trending%20meme.%20'>Telegram</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href='https://www.instagram.com/?url=https%3A%2F%2Fthala-for-reason.vercel.app%2F'>Instagram</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href='https://www.reddit.com/submit?url=https%3A%2F%2Fthala-for-reason.vercel.app%2F&title=Thala%20Checker%0ACheck%20weather%20your%20prompt%20is%20a%20thala%20or%20not%0A'>Reddit</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator/>
          <MenubarItem>
            Copy Link
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ShareComp;
