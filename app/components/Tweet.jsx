"use client";

import * as Avatar from "@radix-ui/react-avatar";
import * as Form from "@radix-ui/react-form";
import {
  HiOutlinePhoto,
  HiOutlineFaceSmile,
  HiCalendar,
  HiOutlineMapPin,
} from "react-icons/hi2";

const Tweet = () => {
  return (
    <div className="flex gap-4 border-b border-gray-200 p-4">
      <Avatar.Root className="bg-blackA3 inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle flex-shrink-0">
        <Avatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Pedro Duarte"
        />
        <Avatar.Fallback
          className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
          delayMs={600}
        >
          JD
        </Avatar.Fallback>
      </Avatar.Root>
      <Form.Root className="w-full">
        <Form.Field>
          <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-900 sr-only">
            Tweet
          </Form.Label>
          <Form.Control asChild>
            <textarea
              placeholder="What's happening?"
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] text-lg leading-none text-gray-900 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
              required
            />
          </Form.Control>
        </Form.Field>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-4">
            <div>
              <HiOutlinePhoto className="w-5 h-5 inline-flex" />
            </div>
            <div>
              <HiOutlineFaceSmile className="w-5 h-5 inline-flex" />
            </div>
            <div>
              <HiCalendar className="w-5 h-5 inline-flex" />
            </div>
            <div>
              <HiOutlineMapPin className="w-5 h-5 inline-flex" />
            </div>
          </div>
          <Form.Submit asChild>
            <button
              disabled
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 font-medium leading-none text-white disabled:opacity-50"
            >
              Tweet
            </button>
          </Form.Submit>
        </div>
      </Form.Root>
    </div>
  );
};

export default Tweet;
