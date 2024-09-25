"use client";
import { useRef, useState } from "react";
import { register } from "@/actions/register";

export default function Register() {
  const [error, setError] = useState<string>();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await register({
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    });
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      return
    }
  };

  return (
    <section className="flex px-4 py-4 border items-center justify-center">
      <form
        ref={ref}
        action={handleSubmit}
        className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
        border border-solid border-black bg-white rounded"
      >
        {error && <div className="">{error}</div>}
        <h1 className="mb-5 w-full text-2xl font-bold">Yeni Kullanıcı Kaydet</h1>

        <label className="w-full text-sm">Ad Soyad</label>
        <input
          type="text"
          placeholder="İsim soyad "
          className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded text-[13px]"
          name="name"
        />

        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder="E-posta Yaz"
          className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
          name="email"
        />

        <label className="w-full text-sm">Şifre</label>
        <div className="flex w-full">
          <input
            type="passwd"
            placeholder="Şifre Belirle"
            className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
            name="password"
          />
        </div>

        <button
          className="w-full border border-solid border-black py-1.5 mt-2.5 rounded
        transition duration-150 ease hover:bg-black"
        >
          Kaydet
        </button>

      </form>
    </section>
  );
}