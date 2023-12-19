"use client";

import { Button } from "@/components/ui/button";
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

const ShareComp = ({website}:{website:string}) => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      },
    );
  };
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Share</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem asChild>
                <Link
                  target="_blank"
                  href={`https://web.whatsapp.com/send?text=https%3A//${website}`}
                >
                  Whatsapp
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20website%20on%20trending%20meme.%0Ahttps%3A//${website}`}
                >
                  Twitter
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=Check%20out%20this%20cool%20website%20on%20trending%20meme.%20https%3A//${website}`}
                >
                  Facebook
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=Check%20out%20this%20cool%20website%20on%20trending%20meme.%20https%3A//${website}`}
                >
                  LinkedIn
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link
                  href={`https://t.me/share/url?url=https%3A//${website}&text=Check%20out%20this%20cool%20website%20on%20trending%20meme.%20`}
                >
                  Telegram
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link
                  href={`https://www.instagram.com/?url=https%3A%2F%2Fthala-for-reason.vercel.app%2F{`}
                >
                  Instagram
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link
                  href={`https://www.reddit.com/submit?url=https%3A%2F%2Fthala-for-reason.vercel.app%2F&title=Thala%20Checker%0ACheck%20weather%20your%20prompt%20is%20a%20thala%20or%20not%0A`}
                >
                  Reddit
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem asChild>
            <Button
              variant={"ghost"}
              className="w-full text-left flex justify-start"
              onClick={() => copyText(website)}
            >
              Copy Link
            </Button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ShareComp;
