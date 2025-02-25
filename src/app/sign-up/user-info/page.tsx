import { UserInfoForm } from "@/features/sign-up/components/user-info-form";

export default function UserInfoPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <UserInfoForm />
      </div>
    </div>
  )
}
