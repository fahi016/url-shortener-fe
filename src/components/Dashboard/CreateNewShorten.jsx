import { useState } from "react";
import { useStoreContext } from "../../contextApi/contextapi";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import api from "../../api/api";
import toast from "react-hot-toast";

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { originalUrl: "" },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${res.shortUrl}`}`;
      await navigator.clipboard.writeText(shortenUrl);
      toast.success("Short URL copied to clipboard", {
        position: "bottom-center",
      });
      if (refetch) {
        await refetch();
      }
      reset();
      setOpen(false);
    } catch {
      toast.error("Failed to create Short URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-[380px] sm:w-[420px] rounded-xl p-6 relative animate-[fadeInUp_0.4s_ease-out]"
      style={{
        background: "var(--color-bg-card)",
        boxShadow: "var(--shadow-custom)",
        fontFamily: "var(--font-montserrat)",
      }}
    >
      {/* CLOSE BUTTON */}
      <Tooltip title="Close">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-xl transition hover:scale-110"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <RxCross2 />
        </button>
      </Tooltip>

      {/* TITLE */}
      <h1
        className="text-center text-2xl font-bold mb-2"
        style={{ color: "var(--color-text-primary)" }}
      >
        Create Short URL
      </h1>

      <p
        className="text-center text-sm mb-6"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Paste a long URL to generate a short link
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit(createShortUrlHandler)} className="space-y-4">
        <TextField
          label="Enter URL"
          id="originalUrl"
          placeholder="https://example.com"
          type="url"
          required
          register={register}
          errors={errors}
          message="URL is required"
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-md font-semibold transition-all hover:scale-[1.02]"
          style={{
            background: "var(--bg-custom-gradient)",
            color: "#fff",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Creating..." : "Create Short URL"}
        </button>
      </form>
    </div>
  );
};

export default CreateNewShorten;
