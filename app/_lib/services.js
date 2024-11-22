import { notFound } from "next/navigation";

export async function getWorks() {
  try {
    const response = await fetch(
      "https://milanzivanov.github.io/Data/works.json"
    );

    if (!response.ok) {
      notFound();
      // throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { works } = data;
    return works;
  } catch (error) {
    console.error("Error fetching works:", error);
    return undefined;
  }
}

export async function getSkills() {
  try {
    const response = await fetch(
      "https://milanzivanov.github.io/Data/works.json"
    );

    if (!response.ok) {
      notFound();
      // throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { skills } = data;
    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return undefined;
  }
}

export async function getWork(id) {
  try {
    const response = await fetch(
      "https://milanzivanov.github.io/Data/works.json"
    );

    if (!response.ok) {
      notFound();
      // throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const { works } = data;

    // Find the work with the matching ID
    const work = works.find((work) => String(work.id) === String(id));

    return work;
  } catch (error) {
    console.error("Error fetching work:", error);
    return undefined;
  }
}
