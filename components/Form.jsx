"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MailIcon, User, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="emall" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea  placeholder="Type Your Message Me" />
        <MessageSquare className="absolute right-6 top-4" />
      </div>
      <Button className='flex items-center max-w-[166px] gap-x-2'>Let's talk <ArrowRightIcon size={20}/></Button>
    </form>
  );
};

export default Form;
