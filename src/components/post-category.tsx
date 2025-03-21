import { Category } from "@/types/biog";
import { selectCategories } from "@/utils/supabase";
import { FolderOpen, Link } from "lucide-react";
import { useEffect, useState } from "react";
const Postcategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await selectCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-row lg:flex-col py-4 gap-4 w-full md:w-60 justify-start items-center lg:justify-center lg:items-end md:items-end">
      <FolderOpen size={16} />
      {categories.map(({ id, name }) => (
        <Link href={`/blogs/${id}`} key={id}>
          <div>{name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Postcategory;
