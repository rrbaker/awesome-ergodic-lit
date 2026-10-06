# Generates one page per work at /works/<id>/ from _data/works.yml.
#
# Jekyll normally makes one page per file. A "generator" plugin runs during the
# build and can add pages that have no file of their own. This one loops over
# the works data and creates a page for each, using the `work` layout and
# passing the entry along as `page.work`. That keeps works.yml the only place
# a work is described.
#
# Custom plugins like this run because the site is built in GitHub Actions;
# GitHub's older "build from branch" Pages mode would ignore them.

module ErgodicWorks
  class Generator < Jekyll::Generator
    safe true

    def generate(site)
      site.data.fetch("works", []).each do |work|
        page = Jekyll::PageWithoutAFile.new(site, site.source, File.join("works", work["id"].to_s), "index.html")
        page.data.merge!(
          "layout" => "work",
          "title" => work["title"],
          "description" => "#{work["title"]} by #{work["author"]}: #{work["summary"]}",
          "work" => work,
        )
        site.pages << page
      end
    end
  end
end
