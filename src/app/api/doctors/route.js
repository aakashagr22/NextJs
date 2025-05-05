import { NextResponse } from "next/server";
import { mockFetchDoctors } from "@/lib/mockData";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const params = {
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
      gender: searchParams.get("gender"),
      experience: searchParams.get("experience"),
      availability: searchParams.get("availability"),
      sortBy: searchParams.get("sortBy"),
      sortOrder: searchParams.get("sortOrder"),
    };

    const result = mockFetchDoctors(params);

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch doctors" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    const requiredFields = [
      "name",
      "specialty",
      "experience",
      "qualification",
      "consultationFee",
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        doctor: {
          id: Date.now().toString(),
          ...data,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding doctor:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add doctor" },
      { status: 500 }
    );
  }
}