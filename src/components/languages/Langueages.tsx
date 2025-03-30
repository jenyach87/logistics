"use client"

import { FC, useCallback, useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

const languages = [
  { key: "en", label: "English" },
  { key: "ua", label: "Українська" },
  { key: "es", label: "Español" },
  { key: "fr", label: "Français" },
];

const Langueages: FC = () => {
  const [lang, setLang] = useState<string>('');
 const handleItemChange = useCallback((key: React.Key) =>{
  const label = languages.find(l => l.key === key)
  setLang(label ? label?.label : '')
 }, []);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="border-amber-500 border-2 py-1 px-2 rounded-md hover:cursor-pointer">{lang ? lang : languages[0].label}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions"  items={languages} onAction={handleItemChange} className="hover: cursor-pointer">
      {languages.map((language) => (
          <DropdownItem key={language.key} textValue={language.label} className="hover:pointer-events-auto">
            {language.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
export default Langueages;