"use client";

import EditorToolbar, { formats, modules } from "@/components/EditorToolbar";
import { useState } from "react";
import ReactQuill from "react-quill";

interface formI {
  title: string;
  description: string;
}

export default function Home() {
  const [form, setForm] = useState<any>({
    title: "",
    description: "",
  });

  const ondescription = (value: any) => {
    setForm({ ...form, description: value });
  };

  return (
    <main className="w-screen h-screen p-4 gap-4 flex flex-col items-center">
      <h2 className="text-xl">
        Exemplo de <span className="text-cyan-400 font-bold">editor</span>{" "}
        completo
      </h2>

      <section
        id="editor"
        className="w-1/3 border border-zinc-600 flex flex-col items-center"
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form?.title}
          onChange={(e: any) => {
            setForm(() => {
              return {
                ...form,
                title: e.target.value,
              };
            });
          }}
        />

        <label htmlFor="description">Editor</label>
        <EditorToolbar toolbarId={"t1"} />
        <ReactQuill
          theme="snow"
          value={form.description}
          onChange={ondescription}
          placeholder={"Write something awesome..."}
          modules={modules("t1")}
          formats={formats}
        />
      </section>
    </main>
  );
}
