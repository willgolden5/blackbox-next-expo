import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useDisclosure,
} from "@chakra-ui/react";
import type { UserResource } from "@clerk/types";
import PopoverMenu from "./PopoverMenu";

type ProfileMenuProps = {
  user: UserResource;
};

const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom-end">
      <PopoverTrigger>
        <Avatar
          name={user.fullName as string}
          size="md"
          bg="gray.700"
          color="white"
          onClick={onToggle}
          cursor={"pointer"}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <PopoverMenu user={user} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileMenu;
