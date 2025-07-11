"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useFetchAllBlogs } from "@/services/reactQueryService";
import { Eye } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import React from "react";

const BlogCards = () => {
  const { data } = useFetchAllBlogs();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {data &&
        data?.map((item) => (
          <Card key={item.id} className="p-5">
            <CardContent className="p-0">
              <div>
                {item.image ? (
                  <Image
                    src={
                      item.image instanceof File
                        ? URL.createObjectURL(item.image)
                        : item.image
                    }
                    alt="blog-post"
                    width={1000}
                    height={40}
                    quality={100}
                    className="w-full h-40 object-cover rounded-md"
                  />
                ) : (
                  <div>no-image</div>
                )}

                <div className="mt-2">
                  <div className="flex items-center justify-end gap-1 text-blue-500 capitalize">
                    <span>
                      <Eye className="w-4 h-4" />
                    </span>
                    <span className="text-xs">{item.visibility}</span>
                  </div>
                  <h1 className="font-bold text-lg first-letter:uppercase">
                    {item.title}
                  </h1>
                  <p className="text-sm first-letter:uppercase">
                    {item.content}
                  </p>

                  <ul className="flex items-center gap-2 flex-wrap mt-5">
                    {item?.skills?.map((tech) => (
                      <li key={tech} className="w-auto">
                        <Badge className="rounded-full w-auto h-8">
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0 mt-5">
              <p className="text-sm text-blue-600 underline cursor-pointer">
                Read more
              </p>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default BlogCards;
