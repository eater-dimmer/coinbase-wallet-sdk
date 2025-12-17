// src/utils/validateConfig.ts

export interface WalletSDKConfig {
  appName?: string;
  chainId?: number;
  rpcUrl?: string;
}

export function validateWalletSDKConfig(config: WalletSDKConfig): void {
  if (!config.appName || config.appName.trim().length === 0) {
    throw new Error("WalletSDK config error: appName is required");
  }

  if (config.chainId !== undefined && typeof config.chainId !== "number") {
    throw new Error("WalletSDK config error: chainId must be a number");
  }

  if (config.rpcUrl && !config.rpcUrl.startsWith("http")) {
    throw new Error("WalletSDK config error: rpcUrl must be a valid http(s) URL");
  }
}
