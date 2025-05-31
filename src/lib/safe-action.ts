import { createSafeActionClient } from "next-safe-action";
import { getClinicId } from "./auth";

export const action = createSafeActionClient();

export const protectedAction = createSafeActionClient({
  async middleware() {
    await getClinicId();
  },
});
