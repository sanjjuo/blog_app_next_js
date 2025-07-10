import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { blogPosts } from "./data";
import { Eye } from "lucide-react";

const BlogCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {blogPosts.map((data) => (
        <Card key={data.id} className="p-5">
          <CardContent className="p-0">
            <div>
              <Image
                src={data.image}
                alt="blog-post"
                width={1000}
                height={40}
                quality={100}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-2">
                <div className="flex items-center justify-end gap-1 text-blue-500 capitalize">
                  <span>
                    <Eye className="w-4 h-4" />
                  </span>
                  <span className="text-xs">{data.visibility}</span>
                </div>
                <h1 className="font-bold text-lg">{data.title}</h1>
                <p className="text-sm">{data.description}</p>

                <ul className="flex items-center gap-2 mt-5">
                  {data.technologies.map((tech) => (
                    <li key={tech.id}>
                      <Badge className="rounded-full">{tech.label}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-5">
            <p className="text-sm text-blue-600 underline">Read more</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogCards;
