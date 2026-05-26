import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',
	allowedDevOrigins: ['http://192.168.0.100:3000'],
};

export default nextConfig;
